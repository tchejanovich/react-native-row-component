import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import Helper from './src/Helper';

const ROW_SIZE = 12;

export default class Row extends Component {
  constructor(props) {
    super(props);
    const elements = Array.isArray(props.children) ? props.children : [props.children];
    this.state = { colCount: 0, elements };
    this.rows = this._setRows(elements);
  }

  /* Static methods */

  static _getElementData(element) {
    const offset = Helper.isDefined(element.props.offset) ? element.props.offset : 0;
    const colSize = Helper.isDefined(element.props.colSize)
                    ? (element.props.colSize + offset) : ROW_SIZE;
    const pullRight = Helper.isDefined(element.props.pullRight)
                                   ? element.props.pullRight
                                   : false;
    return [colSize, pullRight];
  }

  static _handleElement(rows, lastRow, colCount, colSize, pullRight) {
    if (colCount + colSize <= ROW_SIZE) {
      if (pullRight) {
        const spacesPulled = ROW_SIZE - colCount - colSize;
        lastRow.push(Row._generateEmptySpace(spacesPulled));
        colCount = ROW_SIZE;
      } else {
        colCount += colSize;
      }
    } else {
      const emptySpaceSize = ROW_SIZE - colCount;
      if (emptySpaceSize) {
        lastRow.push(Row._generateEmptySpace(emptySpaceSize));
      }
      rows.push(lastRow);
      lastRow = [];
      if (pullRight) {
        lastRow.push(Row._generateEmptySpace(ROW_SIZE - colSize));
        colCount = ROW_SIZE;
      } else {
        colCount = colSize;
      }
    }
    return [rows, lastRow, colCount];
  }

  static _generateEmptySpace(colSize) {
    return { type: 'emptySpace', props: { colSize, offset: 0 } };
  }

  /* Private methods */

  _setRows(elements) {
    const rows = this._configureRows(elements);
    return this._addOffsetsToRows(rows);
  }

  /*  eslint-disable no-param-reassign*/
  _configureRows(elements) {
    let [colCount, rows, lastRow] = [0, [], []];
    if (this.props.centerCols) {
      const initialOffsets = [Row._generateEmptySpace(Math.round((ROW_SIZE - elements.length) / 2))];
      elements = initialOffsets.concat(elements);
    }
    elements.forEach((element) => {
      if (Helper.isDefined(element)) {
        const [colSize, pullRight] = Row._getElementData(element);
        [rows, lastRow, colCount] = Row._handleElement(rows, lastRow, colCount, colSize,
                                                               pullRight);
        lastRow.push(element);
      }
    });
    if (colCount !== ROW_SIZE) {
      lastRow.push(Row._generateEmptySpace(ROW_SIZE - colCount));
    }
    rows.push(lastRow);
    return rows;
  }

  _addOffsetsToRows(rows) {
    const offsettedRows = [];
    rows.forEach((row) => {
      const offsettedRow = this._addOffsetsToRow(row);
      offsettedRows.push(offsettedRow);
    });
    return offsettedRows;
  }

  _addOffsetsToRow(row) {
    const offsettedRow = [];
    row.forEach((element) => {
      if (Helper.isDefined(element.props.offset)) {
        const emptySpace = Row._generateEmptySpace(element.props.offset);
        offsettedRow.push(emptySpace);
      }
      offsettedRow.push(element);
    });
    return offsettedRow;
  }

  _renderRow(row, i) {
    return (
      <View key={i} style={{ flex: 1, flexDirection: 'row' }}>
        {row.map((object, j) => this._renderElement(object, j))}
      </View>
    );
  }

  _renderElement(element, i) {
    const colSize = Helper.isDefined(element.props.colSize)
                                ? element.props.colSize
                                : ROW_SIZE;
    if (element.type === 'emptySpace') {
      return (
        <View key={i} style={{ flex: colSize }} />
      );
    }
    return (
      <View key={i} style={{ flex: colSize }}>
        {element}
      </View>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ elements: nextProps.elements });
  }

  render() {
    const rows = this._setRows(this.state.elements);
    return (
      <ListView
        dataSource={Helper.parseListViewDS(rows)}
        renderRow={row => this._renderRow(row)}
        bounces={false}
      />
    );
  }
}