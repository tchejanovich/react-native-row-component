# react-native-row-component

Props:

| Prop | Functionality |
| :---         |     :---:      | 
| colSize   | the default is 12 (the size of the Row), in case of overflow, it will automatically send the column to the next row.     |
| offset     | the default is 0       |
| pullRight     | the default is FALSE.       |

Example:

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

Result:
![Result](examples/example1.png)
	