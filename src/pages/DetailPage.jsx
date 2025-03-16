import React from "react";
import { useParams} from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/api";
import NotFoundPage from "./NotFoundPage";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    getNote(id)
    .then(({ data }) => {
      setNote(data);
      setInitializing(false);
    });
  }, [id]);

  if (initializing) {
    return <p>Loading...</p>;
  }

  if (note === null) {
    return (
      <div>
        <NotFoundPage />;
      </div>
    );
  }

  return (
    <div>
      <NoteDetail {...note} />
    </div>
  );
}
  
export default DetailPage;