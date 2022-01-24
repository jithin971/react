import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const BookDetails = () => {

    let params = useParams();
    let books = [
        { id: 101, title: "abc", author: "xyz" },
        { id: 102, title: "xyz", author: "abc" },
        { id: 103, title: "india", author: "india" }
    ]
    let [selectedBooks, setSelectedbooks] = useState([])

    useEffect(() => {
        setSelectedbooks(books.filter(book => book.id.toString() === params.id.toString()))
    }, [params])

    return <div>

        Details {params.id}
       <div>
           BookName :{selectedBooks[0].title}
       </div>
       <div>
           Book Author :{selectedBooks[0].author}
       </div>
    </div>
}

export default BookDetails