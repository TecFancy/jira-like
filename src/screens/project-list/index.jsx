import { useEffect, useState } from "react";
import { List } from "./list"
import { SearchPanel } from "./search-panel"

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/projects").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);

  useEffect(() => {
    fetch("/api/users").then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, [])

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list} users={users} />
  </div>
};
