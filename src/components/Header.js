import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { SpanCV } from "../theme/SmallComp"
import { Emoji } from "./Emoji"
import { HeaderContainer } from "../theme/Containers"
import { HeaderLink, HeadDiv0, HeadDiv1} from "../theme/HeaderStyle"
import { HeaderText } from "../components/Text"
//span role="img" aria-label="test">
export const Header = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
			<HeaderContainer>
			<HeadDiv0><SpanCV>{HeaderText[0]}</SpanCV></HeadDiv0>
			<HeaderLink to="/" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1> Projects </HeadDiv1></HeaderLink>
			<HeaderLink to="/contact" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1>  Contact </HeadDiv1></HeaderLink>			
			<HeadDiv1 onClick={updateLocale.bind(null, "fr")}><Emoji label="" symbol="🇫🇷" /></HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "en")}><Emoji label="" symbol="🇬🇧" /></HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "sp")}><Emoji label="" symbol="🇪🇸" /></HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "pt")}><Emoji label="" symbol="🇵🇹" /></HeadDiv1>
			</HeaderContainer>
			</>
			)
}