import React, { useContext } from "react"
import { useSize } from "../../custom/Size"
import { LocaleContext } from "../../custom/LocaleContext"
import { A, SpanCV, H5 } from "../../theme/SmallComp"
import { Emoji } from "../Emoji"
import { Icon } from "../Icons"
import { violet } from "../../theme/variables"
import { HeaderLink, HeadDiv0, HeadDiv1, HeadDiv2 } from "../../theme/HeaderStyle"

export const BgHeader = ({burger, setBurger}) => {
	const { locale, updateLocale } = useContext(LocaleContext)
	const widthS = useSize()
	//&& !burger
		return (
			<>
			{widthS < 600 
                ?  <HeadDiv0><H5 color={violet}>Abel Locati</H5></HeadDiv0>
				:  <HeadDiv0><SpanCV>Abel Locati</SpanCV></HeadDiv0>
			}
			<HeaderLink to="/" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1> Projects </HeadDiv1></HeaderLink>
			<HeaderLink to="/contact" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1>  Contact </HeadDiv1></HeaderLink>			
            <HeadDiv2 onClick={updateLocale.bind(null, "fr")}><Emoji label="" symbol="🇫🇷" /></HeadDiv2>
			<HeadDiv2 onClick={updateLocale.bind(null, "en")}><Emoji label="" symbol="🇬🇧" /></HeadDiv2>
			<HeadDiv2 onClick={updateLocale.bind(null, "sp")}><Emoji label="" symbol="🇪🇸" /></HeadDiv2>
			<HeadDiv2 onClick={updateLocale.bind(null, "pt")} style={{paddingRight: "1em"}}><Emoji label="" symbol="🇵🇹" /></HeadDiv2>
			</>
			)
}
