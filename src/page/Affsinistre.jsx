import React, { useEffect, useState } from "react";
import axios from "axios"
import "./style.css";


const Affsinistre = () =>
{


        const [ data, setData ] = useState( [ ] )
         
        useEffect( () =>
        {
                fetchData();
        }, [])

        
        const fetchData = async () =>
        {
                try
                {
                        const response = await axios.get( "http://localhost/api/sinistre_data.php" )

                        console.log( response.data );
                        setData(response.data );

                
                } catch ( error )
                {
                        console.log( "Erreur lors de la récuperation des données" )
                        
                }
        }

        return ( 
                <>
                <section className="tab">
             <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Assurance</th>
              <th>Numero</th>
              <th>Nom prenom</th>
              <th>Email</th>
              <th>Contact1</th>
              <th>Contact2</th>
              <th>Lieu</th>
              <th>Intervention</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.assurance}</td>
                  <td>{item.numero}</td>
                  <td>{item.nomprenom}</td>
                  <td>{item.email}</td>
                  <td>{item.contact1}</td>
                  <td>{item.contact2}</td>
                  <td>{item.lieu}</td>
                  <td>{item.intervention}</td>
                  <td>{item.date}</td>
                  <td>{item.details}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">Aucune donnée trouvée !</td>
              </tr>
            )}
          </tbody>
        </table>
                        </section>
                        </>
        )
}

export default  Affsinistre 