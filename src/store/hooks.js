import { useDispatch, useSelector } from "react-redux";

// Custom hooks to use throughout the app
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
