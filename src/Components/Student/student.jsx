

const Student = (props) => {
  const fullName = props.name;
  const programmingExp= props.experience;
  const childCom = props.children;
  return(
    <div className="container p-4">
     
      <div className="row border">
        <div className="col-2"> 
          <img src={props.headshot}
          className="w-100 py-2" alt="profile">
          </img>
        </div>
        <div className="col-8">
          {fullName} <br/>
          Programming Experience {programmingExp} years
        </div>
       <div className="col-2">
        {childCom}
       </div>
      </div>
    </div>
  );
}
export default Student;