React-native-row-component

Props:

| Prop | Functionality |
| :---         |     :---:      | 
| colSize   | the default is 12 (the size of the Row), in case of overflow, it will automatically send the column to the next row.     |
| offset     | the default is 0       |
| pullRight     | the default is FALSE.       |

Example:

```
	<Row>
		<View colSize={5} style={{ height: 50, backgroundColor: 'red' }} />
		<View colSize={2} pullRight style={{ height: 50, backgroundColor: 'blue' }} />
		<View colSize={2} offset={7} style={{ height: 50, backgroundColor: 'green' }} />
	</Row>

```