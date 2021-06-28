const timelineData = [
  {
    text: "La création de la réclamation",
    date: "25 Mai 2021",
    category: {
      tag: "Création",
      color: "#FFDB14",
    },
    link: {
      url: "/StatusTimeLine",
      text: "",
    },
  },
  {
    text: "le traitement de la réclamation par le département est en cours",
    date: "25 Mai 2021",
    category: {
      tag: "en cours",
      color: "#1DA1F2",
    },
    link: {
      url: "/StatusTimeLine",
      text: "",
    },
  },
  {
    text: "La réclamation a été traité et vous trouverz la réponse au dessous",
    date: "25 Mai 2021",
    category: {
      tag: "Traité",
      color: "#00FF7F",
    },
    link: {
      url: "/StatusTimeLine",
      text: "",
    },
  },
];
//'#ff0000'
const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

function Timeline(props) {
  const responseTitle = (
    <h1 style={{ color: "black" }}>
      La réponse de département à votre réclamation est :
    </h1>
  );
  const reponse = (
    <h1 style={{ color: "blue" }}>{props.timelineData.reponse}</h1>
  );
  if (props.timelineData.status) {
    timelineData[0].category.color = "#FFDB14";
    timelineData[1].category.color = "#1DA1F2";
    timelineData[2].category.color = "#ff0000";
    console.log(timelineData);
  } else {
    timelineData[0].category.color = "#FFDB14";
    timelineData[1].category.color = "#ff0000";
    timelineData[2].category.color = "#00FF7F0";
  }

  if (timelineData.length > 0) {
    return (
      <div>
        <div>
          <h1 style={{ color: "red" }}>
            La couleur rouge indique l'état actuel de votre réclamation
          </h1>
        </div>
        <div className="timeline-container">
          {console.log(timelineData)}
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>

        {props.timelineData.status ? (
          <div>
            {responseTitle}
            {reponse}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default Timeline;
