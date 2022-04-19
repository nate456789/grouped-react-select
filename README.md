




Example dataset for the selector:
```javascript
 const groupedOptions = [
   {
     label: 'Employer 1',
     options: [
       {label: 'Group 1, option 1', value: 'value1'},
       {label: 'Group 1, option 2', value: 'value2'},
     ],
   },
   {
     label: 'Employer 2',
     options: [
       {label: 'Group 2, option 3', value: 'value3'},
       {label: 'Group 2, option 4', value: 'value4'},
     ],
   },
 ];
```

Basic use example:
```javascript
 <GroupedSelect
    placeholder=""
    groupedOptions={this.props.groupedEmployerJobs}
  />
```


