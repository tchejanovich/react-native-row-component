React-native-row-component

Props:
 - colSize:
 	the default is 12 (the size of the Row), in case you overflow, it will automatically go to the next row.
- pullRight:
	the default is FALSE.
- offset:
	the default is 0.

Example:

```
	<Row>
		<View colSize={5} style={{ height: 50, backgroundColor: 'red' }} />
		<View colSize={2} pullRight style={{ height: 50, backgroundColor: 'blue' }} />
		<View colSize={2} offset={7} style={{ height: 50, backgroundColor: 'green' }} />
	</Row>

```