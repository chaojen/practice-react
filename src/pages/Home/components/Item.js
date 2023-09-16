const Item = ({ id, content, date, time, remove, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true;
    remove(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{content}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>
        Remove
      </button>
    </div>
  );
};

export default Item;
