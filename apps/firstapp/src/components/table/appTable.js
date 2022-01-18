const AppTable = (props) => <div>

    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        {
            props.students.map((res,key) => (
                <tr key={key} >
                    <td>{key}{res.name}</td>
                    <td>{res.age}</td>
                </tr>
            ))
        }


    </table>

</div>
export default AppTable