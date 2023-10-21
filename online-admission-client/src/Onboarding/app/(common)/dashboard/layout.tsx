
const DashboardLayout = async ({ children }: IChildren) => {


    return (
        <div className= "">
            <div className= "col-span-4">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;