import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../slices/authSlice";
import UserImages from "../components/UserImages";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <UserImages userId={user?.id} />
      <button onClick={() => dispatch(logout())} className="bg-red-500 text-white p-2 mt-2">
        Logout
      </button>
    </div>
  );
}
