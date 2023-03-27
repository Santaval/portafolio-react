import { faBookOpen, faCode, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import TopNav from "../Components/TopNav";
import "../css/Api.css";

function API() {
  return (
    <>
      <TopNav section={"API'S"} />

      <div className="apisContainer">
        <ApiCard
          name={"TSE API"}
          description={
            "Permite obtener los datos de una persona costarricense mediante el número de cedule. Extrae los datos de la página del Tribunal Supremo de Elecciones mediante scrapping web."
          }
          status="Online"
          visibility={"Public"}
          endpoints={1}
          link='https://tseapi.savaldev.com'
        />

        <ApiCard
          name={"PROACTIVA API"}
          description={
            "Backend para la aplicación web y móvil de Proactiva. Provee datos de ususarios, expedientes, actividades, entre otros."
          }
          status="Offline"
          visibility={"Private"}
          endpoints={30}
          link="proactiva-api.fly.dev"
        />

        <ApiCard
          name={"MIRROR SHOP API"}
          description={
            "Backend de la tienda en linea Mirror Shop. Provee los datos de productos, clientes, agenda de pedidos, procesamiento de pagos, entre otros."
          }
          status="Offline"
          visibility={"Private"}
          endpoints={10}
        />
      </div>
    </>
  );
}

function ApiCard({ name, description, link, status, visibility, endpoints }) {
  const color = status === "Online" ? "green" : "red";

  return (
    <div className="apiCard">
      <div className="header">
        <span className="apiName">{name}</span>
        <div className="status">
          <span style={{ color }}>{status}</span>
          <div className="dot"></div>
        </div>
      </div>

      <div className="description text">{description}</div>

      <div className="indicators">
        <div className="indicator endpoints">
          <span>Endpoints</span>
          <span style={{ color }}>{endpoints}</span>
        </div>

        <div className="indicator lenguage">
          <FontAwesomeIcon color={color} icon={faCode} />
          <span>NodeJs</span>
        </div>

        <div className="indicator lenguage">
          {visibility === "Private" && (
            <FontAwesomeIcon color={color} icon={faLock} />
          )}
          {visibility === "Public" && (
            <FontAwesomeIcon color={color} icon={faUnlock} />
          )}
          <span>{visibility}</span>
        </div>



        <div className="indicator lenguage">
          <Link to={link} target="_blank">
          <FontAwesomeIcon color={color} icon={faBookOpen} />
          <span>Docs</span>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default API;
