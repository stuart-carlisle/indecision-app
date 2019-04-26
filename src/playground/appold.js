
const app ={
  title:'Indecision App',
  subtitle:'Put your life in the hands of a computer',
  options:[]
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if(option){
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const removeOption = () => {
  app.options = []
  renderApp()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()*Math.floor(app.options.length))
  const option = app.options[randomNum]
  console.log(option)
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>here are your options:</p>  : <p>no options </p>}
      <p>{app.options.length}</p>
      <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
      <button onClick = {removeOption}>Remove All Options</button>
      <ol>
      {
        app.options.map((option)=><li key={option}>{option}</li>)
      }
      </ol> 
      <form  onSubmit = {onFormSubmit}>
        <input type = "text" name="option"/>
        <button>Add Option</button>
      </form>
      </div>
  )
  ReactDOM.render(template,appRoot)
}

const appRoot = document.getElementById('app')
renderApp()