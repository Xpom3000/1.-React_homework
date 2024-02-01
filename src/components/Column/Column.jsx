import Card from "./CardsItem";

export default function Column({title}) {
    return (
        <div className="main__column column">
            <div className="column__title">
              <p>{title}</p>
            </div>
            <div className="cards">
                <Card topic={"Research"} title={"Новая задача"} />
                <Card topic={"Web design"} title={"Новая задача"} />
                <Card topic={"Copywriting"} title={"Новая задача"} />
                <Card topic={"Web design"} title={"Новая задача"} />
            </div>
          </div>
    )
}