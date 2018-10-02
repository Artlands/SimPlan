const initState = {
  projects:[
    {id: '1', title:'title1', content:'content1, content2, content3'},
    {id: '2', title:'title2', content:'content1, content2, content3'},
    {id: '3', title:'title3', content:'content1, content2, content3'}
  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type ) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer