import React, { useContext } from "react"
import { LocaleContext } from "../custom/LocaleContext"
import { H5, A, Span } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import { PCoContainer } from "../theme/Containers"
import { PCODIV1, PCODIV2_00, PCODIV2_01, PCODIV2_01_1, PCODIV2_01_2, PCODIV2_01_3, PCODIV2_03_Text, PCODIV2_03_Icons, PCODIV2_01_4, PCODIV2_02, PCODIV2_02_1, PCODIV2_02_2, PCODIV2_02_3, PCODIV2_02_4, PCODIV2_02_5, PCODIV2_03_1, PCODIV2_03_2, PCODIV2_03_3, PCODIV2_03_4, PCODIV2_03_5, PCODIV2_03_6, PCODIV2_03, PCODIV3 } from "../theme/PCodingStyle"

export const PCoding = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return(
                <PCoContainer >
				<PCODIV1>
				{locale === "en" && <><H5>Here are some of my programming skills. Over the last two years, I have been learning to use a number of tools and frameworks in my free time. Below, are some of the technologies I used the most. Currently, I am mostly focusing on JavaScript and React.</H5><H5>This webpage has been fully done in React. The repository for this website and my other works are available at the links below.</H5></>}
				{locale === "fr" && <><H5>Voici quelques-unes de mes compétences en programmation. Au cours des deux dernières années, j'ai appris à utiliser un certain nombre d’outils et de frameworks, pendant mon temps libre. Ci-dessous, quelques-uns de ceux que j'ai le plus utilisés. Actuellement, je me concentre principalement sur JavaScript et React.</H5><H5>Cette page Web a été entièrement réalisée avec React. Le dépôt de ce site Web, et ceux de mes autres projets, peuvent être consultés en cliquant sur les liens ci-dessous.</H5></>}
				{locale === "sp" && <><H5>Estas son algunas de las cosas que sé hacer en programación. Durante estos dos últimos años, he aprendido a utilizar una serie de herramientas y frameworks en mi tiempo libre. Actualmente, estoy trabajando principalmente con JavaScript y React.</H5><H5>Esta página web se ha realizado completamente en React. El repositorio de este sitio web, y algunos de mis otros trabajos están disponibles en los enlaces a continuación.</H5></>}
				{locale === "pt" && <><H5>Aqui há algumas das minhas habilidades de programação. Nos últimos dois anos, aprendí vários tools e frameworks, no meu tempo livre. Abaixo, há algumas das tecnologias que mais usei. Atualmente, estou focando principalmente em JavaScript e React.</H5><H5>Esta página web foi totalmente elaborada em React. O repositório deste site e meus outros trabalhos encontram-se nos links abaixo.</H5></>}
				</PCODIV1>
				<PCODIV2_00>
				<PCODIV2_01>
				<PCODIV2_01_1>
				{locale === "en" && <H5><Span>Languages</Span></H5>}
				{locale === "fr" && <H5><Span>Languages</Span></H5>}
				{locale === "sp" && <H5><Span>Lenguajes</Span></H5>}
				{locale === "pt" && <H5><Span>Languagems</Span></H5>}
				</PCODIV2_01_1>
				<PCODIV2_01_2>
				<A target="_blank" href="">
				<Icon name="csharp"  color={violet}/>
				</A>
				</PCODIV2_01_2>
				<PCODIV2_01_3>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="javascript" color={violet}/>
				</A>
				</PCODIV2_01_3>
				<PCODIV2_01_4>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="typescript" color={violet}/>
				</A>
				</PCODIV2_01_4>
				<PCODIV2_01_4>
				<A target="_blank" href="https://github.com/mitchzer/ADRENABID">
				<Icon name="ruby" width={"22"} color={violet}/>
				</A>

				</PCODIV2_01_4>
				</PCODIV2_01>
				<PCODIV2_02>
				<PCODIV2_02_1>
				{locale === "en" && <H5><Span>Frameworks</Span></H5>}
				{locale === "fr" && <H5><Span>Frameworks</Span></H5>}
				{locale === "sp" && <H5><Span>Frameworks</Span></H5>}
				{locale === "pt" && <H5><Span>Frameworks</Span></H5>}
				</PCODIV2_02_1>
			    <PCODIV2_02_2>
			    <A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="reactAnim" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_2>
				<PCODIV2_02_3>
				<A target="_blank" href="">
				<Icon name="net" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_3>
				<PCODIV2_02_4>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="nestjs" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_4>
				<PCODIV2_02_5>
				<A target="_blank" href="https://github.com/mitchzer/ADRENABID">
				<Icon name="rails" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_5>
				</PCODIV2_02>
				<PCODIV2_03>
				
				<PCODIV2_03_1>
				{locale === "en" && <H5><Span>Others</Span></H5>}
				{locale === "fr" && <H5><Span>Autres</Span></H5>}
				{locale === "sp" && <H5><Span>Otros</Span></H5>}
				{locale === "pt" && <H5><Span>Outros</Span></H5>}
				</PCODIV2_03_1>
				
				
				<PCODIV2_03_2>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="nodejs" width={"70"} color={violet}/>
				</A>
				</PCODIV2_03_2>
				<PCODIV2_03_3>
				<Icon name="github" color={violet}/>
				</PCODIV2_03_3>
				<PCODIV2_03_4>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="postgresql" color={violet}/>
				</A>
				</PCODIV2_03_4>
				<PCODIV2_03_5>
				<Icon name="html" color={violet}/>
				</PCODIV2_03_5>
			    <PCODIV2_03_6>
				<Icon name="css" color={violet}/>
				</PCODIV2_03_6>
				
				</PCODIV2_03>
				</PCODIV2_00>
				<PCODIV3>

				</PCODIV3>
				</PCoContainer>
		)
}