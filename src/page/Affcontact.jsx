import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";


const Dashboard = () =>
{
        const [ data, setdata ] = useState( [] )
        
        useEffect( () =>
        {
                fetchdata();
        }, [])

        
        const fetchdata = async () =>
        {
                try
                {
                        const response = await axios.get( "http://localhost/api/contact_data.php" )
                        console.log(response.data)
                        setdata( response.data )
                
                } catch ( error )
                {
                        console.log( "Erreur lors de la récuperation des données" )
                }
        }

        return( 
                        <section className="tab">
                        <table>
                                <thead>
                                        <tr>
                                        <th>ID</th>
                                        <th>Contact</th>
                                        <th>email</th>
                                        <th>Message</th>
                                        </tr>        
                                </thead>
                                
                                { data.map((item)=>
                                <tbody key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.email}</td>
                                        <td>{ item.message}</td>
                                        </tbody>
                                        )}
        </table>
        </section>
        )
}

export default  Dashboard 