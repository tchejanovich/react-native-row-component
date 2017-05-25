import { ListView } from 'react-native';

export default class Helper {

  static isDefined(value) {
    return value !== null && value !== undefined;
  }

  static parseListViewDS(dataSource) {
    const dsinit = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return dsinit.cloneWithRows(dataSource);
  }
}
