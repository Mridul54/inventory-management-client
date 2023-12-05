
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";





const UseManager = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure();
    const { data: isManager, isPending: isManagerLoading } = useQuery({
        queryKey: [user?.email, 'isManager'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is manager', user)
            const res = await axiosSecure.get(`/users/manager/${user.email}`);
            // console.log(res.data);
            return res.data?.manager;
        }
    })
    return [isManager, isManagerLoading]
};

export default UseManager;