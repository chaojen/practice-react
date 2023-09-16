import Item from "./Item";

const List = ({ notes, remove, submittingStatus }) => {
  return (
    <div className="list">
      {notes.map((note) => {
        const { id, content, date, time } = note;
        return (
          <Item
            className="item"
            key={id}
            id={id}
            content={content}
            date={date}
            time={time}
            remove={remove}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
