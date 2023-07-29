

export default function Students(props) {
  const fullName = props.name;
  const programmingExp= props.experience;

  return(
    <div className="container p-4">
     
      <div className="row border">
        <div className="col-2"> 
          <img src={props.headshot}
          className="w-100 py-2" alt="profile">
          </img>
        </div>
        <div className="col-10">
          {fullName} <br/>
          Programming Experience {programmingExp} years
        </div>
      </div>
    </div>
  );
}