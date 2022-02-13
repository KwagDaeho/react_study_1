function Form1() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `
      form name : ${event.target.elements.form_name.value}
      form number : ${event.target.elements.form_num.value}
      `
    );
  };
  return (
    <div className="form1">
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <label htmlFor="form_name">Name : </label>
        <br />
        <input
          type="text"
          id="form_name"
          name="form_name"
          defaultValue="Daeho"
        />
        <br />
        <label htmlFor="form_num">Num : </label>
        <br />
        <input type="text" id="form_num" name="form_num" defaultValue="123" />
        <br />
        <input type="submit" value="Submit!" />
      </form>
    </div>
  );
}

export default Form1;
