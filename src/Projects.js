import React, { useContext } from "react"
import { LocaleContext } from "./context/LocaleContext"
import { Welcome } from "./components/Welcome"
import { PChem } from "./components/PChem"
import { PDrones } from "./components/PDrones"
import { PCoding } from "./components/PCoding"
import Tabs from "./components/Tabs"
import { ProjectContainer} from "./theme/Containers"

//for chemistry tab <Tabs alignItems="center">
export const Projects = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
            <Welcome />
			<ProjectContainer>
        {locale === "en" && 
        	<Tabs maxWidth="30px" dir={window.innerWidth < 767 
				? "row" : "column" }>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Chemistry">
		          <PChem />
				</div>
			</ Tabs>
        }
		{locale === "fr" && 
			<Tabs maxWidth="30px" dir={window.innerWidth < 767 
				? "row" : "column" }>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Chimie">
		          <PChem />
				</div>
			</ Tabs>
    	}
    			
		{locale === "sp" && 
			<Tabs  maxWidth="30px" dir={window.innerWidth < 767 
				? "row" : "column" }>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Química">
		          <PChem />
				</div>
			</ Tabs>
 	    }	
		{locale === "pt" && 
			<Tabs  maxWidth="30px" dir={window.innerWidth < 767 
				? "row" : "column" }>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Química">
		          <PChem />
				</div>
			</ Tabs>
	    }	
			</ProjectContainer>
			 </>   
			)
}


