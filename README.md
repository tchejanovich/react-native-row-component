# react-native-row-component

**Installation:**

> npm install --save react-native-row-component

**Props:**

| Prop | Functionality |
| :---         |     :---:      | 
| colSize   | the default is 12 (the size of the Row), in case of overflow, it will automatically send the column to the next row.     |
| offset     | the default is 0       |
| pullRight     | the default is FALSE.       |

**Example:**

```
	import Row from 'react-native-row-component';
	... 
	<Row>
		<View colSize={5} style={{ height: 100, backgroundColor: 'red' }} />
		<View colSize={2} pullRight style={{ height: 100, backgroundColor: 'blue' }} />
		<View colSize={2} offset={7} style={{ height: 100, backgroundColor: 'green' }} />
	</Row>
	<Row>
		<View colSize={10} style={{ height: 100, backgroundColor: 'black' }} />
	</Row>

```


**Result:**
![Result](examples/example1.png)

**The colSize doesn´t need to be an integer. For example, if you need to divide a Row into five columns, you could do:**

```
	<Row>
		<View colSize={2.4} style={{ height: 100, backgroundColor: 'red' }} />
		<View colSize={2.4} style={{ height: 100, backgroundColor: 'blue' }} />
		<View colSize={2.4} style={{ height: 100, backgroundColor: 'green' }} />
		<View colSize={2.4} style={{ height: 100, backgroundColor: 'black' }} />
		<View colSize={2.4} style={{ height: 100, backgroundColor: 'orange' }} />
	</Row>

```
	