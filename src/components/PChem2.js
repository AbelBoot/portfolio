import React, { useContext } from "react"
import { LocaleContext } from "../custom/LocaleContext"
import { useSize } from "../custom/Size"
import { Image, H5, A } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import { PCDIVInt1, PCDIVVERT_1, PCDIVVERT_2, PCDIVVERT_0_Sm, PCDIVVERT_2_Sm, PCDIVVERT_1_Sm, PCDIVQ, PCDIVQ_1, PCDIVQ_2, PCDIVQ_3 } from "../theme/PChemStyle"

export const PChem2 = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	const widthS = useSize()

	return( <PCDIVInt1 locale={locale}>
		    { widthS < 600 
		    	? <>
				<PCDIVVERT_0_Sm>
  			      <PCDIVVERT_1_Sm paddingRight="10" paddingLeft="4" smallHeight="25">
				    <Image img={"DeltamethrinHorizontalBig"} 
					  bottom="2" 
					  right="5"
					  //maxWidth="100"
					  minHeight="20"
					  //height="40"
					  />
			      </PCDIVVERT_1_Sm> 
			      <PCDIVVERT_2_Sm>
			        {locale === "en" && <H5 marginBottom="5em">Deltamethrin is a pyrethroid ester. It is a highly effective insecticide, and it has been widely used by the agrochemical industry. Trace amounts of deltamethrin can be found in olive oil. Being a neurotoxin, and potentially an endocrine disruptor, its extraction from olive oil is therefore important. One of the possible techniques to achieve this is to use Molecularly Imprinted Polymers (MIP). A MIP is generated by creating a polymer matrix between some functional monomers - here Metacrylic Acid (MAA) and Acrylamide (AM) - and a template (here deltamethrin). After generation of the MIP, the template is removed, but affinity of the MIP towards the template is retained, allowing its extraction from other mediums (such as olive oil). In the paper below, quantum calculations showed that the complex formed (through Van-der-Walls interactions) between deltamethrin and AM (bottom picture) is more stable than the one formed with MAA (top picture). This rationalizes the better imprinting effect of AM towards deltamethrin.</H5>}
			        {locale === "fr" && <H5 marginBottom="5em">La deltaméthrine est un ester de la famille des pyréthrinoïdes. Insecticide très efficace, elle est très utilisée par l'industrie agrochimique. Neurotoxique, mais aussi suspectée d’être un perturbateur endocrinien, son extraction de l'huile d’olive, où des traces peuvent être détectées, est essentielle. Une des techniques utilisées pour y parvenir consiste à utiliser des polymères à empreinte moléculaire (MIP). Un MIP est généré en créant une matrice entre des monomères - ici l'acide métacrylique (MAA) et l'acrylamide (AM) - et une molécule empreinte (ici la deltaméthrine). Après génération du MIP, la molécule empreinte est éliminée, mais l'affinité du MIP envers celle-ci est conservée (grâce aux cavités laissées derrière elle), permettant sa future extraction lorsque le MIP est appliqué à d'autres milieux (comme l'huile d'olive). Dans l'article ci-dessous, un certain nombre de calculs ont pu démontrer que le complexe formé entre la deltaméthrine et l'AM (image du bas) est plus stable que celui formé avec le MAA (image du haut). Cela rationalise le meilleur effet d'impression de l’acrylamide vis-à-vis de la deltaméthrine dans ce contexte.</H5>}		
			        {locale === "sp" && <H5 marginBottom="5em">La deltametrina es un piretroide que tiene una actividad insecticida muy eficaz, y es muy utilizado en agricultura. Por ser neurotóxico, pero también sospechoso de actuar como interruptor endocrino, su extracción del aceite de oliva es fundamental. Una de las técnicas utilizadas para lograr esto es utilizar polímeros de impresión molecular (MIP). Un MIP se genera creando una matriz entre monómeros functionales, y una molécula molde. En este caso, el ácido metacrílico (MAA), la acrilamida (AM), y la deltametrina, respectivamente. Tras la generación del MIP, se extrae la molécula molde, pero se conserva la afinidad del MIP hacia ella, gracias a las cavidades que quedan. Eso permite su futura extracción cuando el MIP se aplique a otros medios, como el aceite de oliva. En el artículo siguiente, se describen varios cálculos que pudieron demostrar que el complejo formado entre la deltametrina y la acrilamida (imagen de abajo) es más estable que el complejo formado con MAA (imagen de arriba). Esto es conforme con el mayor efecto de impresión de la acrilamida sobre la deltametrina en este entorno.</H5>}	
			        {locale === "pt" && <H5 marginBottom="5em">A deltametrina é um piretróide que tem uma atividade inseticida muito eficaz e é amplamente utilizado na agricultura. Sustancia neurotóxica, mas também suspeita de atuar como desregulador endócrino, sua extração do azeite é essencial. Uma das técnicas usadas para conseguir isso é usar polímeros com impressão molecular (MIP). Um MIP é gerado criando uma matriz entre monômeros funcionais (neste caso, o ácido metacrílico (MAA) e a acrilamida (AM)) e uma molécula molde (neste caso, a deltametrina). Depois do processo de geração do MIP, a molécula molde é clivada, mas a afinidade do MIP com ela é preservada (graças as cavidades que deixa). Isso permite uma extração posterior, quando o MIP é aplicado a outros meios (como o azeite). No artigo a seguir, são descritos alguns cálculos que foram capazes de demonstrar que o complexo formado entre a deltametrina e a acrilamida (AM, imagem abaixo) é mais estável do que o complexo formado com el MAA (imagem acima). Isso é consistente com o maior efeito de impressão da acrilamida sobre a deltametrina nesse ambiente.</H5>}
			      </PCDIVVERT_2_Sm>
				</PCDIVVERT_0_Sm>
		    	</>
		    	: <>
                  <PCDIVVERT_1 paddingRight="10" paddingLeft="4">
				  <Image img={"DeltamethrinVerticalBig"} 
					  bottom="2" 
					  right="5"
					  //maxWidth="100"
					  minHeight="40"
					  /> 
		    	  </PCDIVVERT_1> 
			      <PCDIVVERT_2>
				  	{locale === "en" && <H5 marginBottom="5em">Deltamethrin is a pyrethroid ester. It is a highly effective insecticide, and it has been widely used by the agrochemical industry. Trace amounts of deltamethrin can be found in olive oil. Being a neurotoxin, and potentially an endocrine disruptor, its extraction from olive oil is therefore important. One of the possible techniques to achieve this is to use Molecularly Imprinted Polymers (MIP). A MIP is generated by creating a polymer matrix between some functional monomers - here Metacrylic Acid (MAA) and Acrylamide (AM) - and a template (here deltamethrin). After generation of the MIP, the template is removed, but affinity of the MIP towards the template is retained, allowing its extraction from other mediums (such as olive oil). In the paper below, quantum calculations showed that the complex formed (through Van-der-Walls interactions) between deltamethrin and AM (bottom picture) is more stable than the one formed with MAA (top picture). This rationalizes the better imprinting effect of AM towards deltamethrin.</H5>}
			        {locale === "fr" && <H5 marginBottom="5em">La deltaméthrine est un ester de la famille des pyréthrinoïdes. Insecticide très efficace, elle est très utilisée par l'industrie agrochimique. Neurotoxique, mais aussi suspectée d’être un perturbateur endocrinien, son extraction de l'huile d’olive, où des traces peuvent être détectées, est essentielle. Une des techniques utilisées pour y parvenir consiste à utiliser des polymères à empreinte moléculaire (MIP). Un MIP est généré en créant une matrice entre des monomères - ici l'acide métacrylique (MAA) et l'acrylamide (AM) - et une molécule empreinte (ici la deltaméthrine). Après génération du MIP, la molécule empreinte est éliminée, mais l'affinité du MIP envers celle-ci est conservée (grâce aux cavités laissées derrière elle), permettant sa future extraction lorsque le MIP est appliqué à d'autres milieux (comme l'huile d'olive). Dans l'article ci-dessous, un certain nombre de calculs ont pu démontrer que le complexe formé entre la deltaméthrine et l'AM (image du bas) est plus stable que celui formé avec le MAA (image du haut). Cela rationalise le meilleur effet d'impression de l’acrylamide vis-à-vis de la deltaméthrine dans ce contexte.</H5>}		
			        {locale === "sp" && <H5 marginBottom="5em">La deltametrina es un piretroide que tiene una actividad insecticida muy eficaz, y es muy utilizado en agricultura. Por ser neurotóxico, pero también sospechoso de actuar como interruptor endocrino, su extracción del aceite de oliva es fundamental. Una de las técnicas utilizadas para lograr esto es utilizar polímeros de impresión molecular (MIP). Un MIP se genera creando una matriz entre monómeros functionales, y una molécula molde. En este caso, el ácido metacrílico (MAA), la acrilamida (AM), y la deltametrina, respectivamente. Tras la generación del MIP, se extrae la molécula molde, pero se conserva la afinidad del MIP hacia ella, gracias a las cavidades que quedan. Eso permite su futura extracción cuando el MIP se aplique a otros medios, como el aceite de oliva. En el artículo siguiente, se describen varios cálculos que pudieron demostrar que el complejo formado entre la deltametrina y la acrilamida (imagen de abajo) es más estable que el complejo formado con MAA (imagen de arriba). Esto es conforme con el mayor efecto de impresión de la acrilamida sobre la deltametrina en este entorno.</H5>}	
			        {locale === "pt" && <H5 marginBottom="5em">A deltametrina é um piretróide que tem uma atividade inseticida muito eficaz e é amplamente utilizado na agricultura. Sustancia neurotóxica, mas também suspeita de atuar como desregulador endócrino, sua extração do azeite é essencial. Uma das técnicas usadas para conseguir isso é usar polímeros com impressão molecular (MIP). Um MIP é gerado criando uma matriz entre monômeros funcionais (neste caso, o ácido metacrílico (MAA) e a acrilamida (AM)) e uma molécula molde (neste caso, a deltametrina). Depois do processo de geração do MIP, a molécula molde é clivada, mas a afinidade do MIP com ela é preservada (graças as cavidades que deixa). Isso permite uma extração posterior, quando o MIP é aplicado a outros meios (como o azeite). No artigo a seguir, são descritos alguns cálculos que foram capazes de demonstrar que o complexo formado entre a deltametrina e a acrilamida (AM, imagem abaixo) é mais estável do que o complexo formado com el MAA (imagem acima). Isso é consistente com o maior efeito de impressão da acrilamida sobre a deltametrina nesse ambiente.</H5>}
                  </PCDIVVERT_2>
			    </>	    	  
		    }
			<PCDIVQ>
			<PCDIVQ_1> 
				<H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>Design and development of molecularly imprinted polymers for the selective extraction of deltamethrin in olive oil: An integrated computational-assisted approach.</H5>
			</PCDIVQ_1> 
			<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://www.sciencedirect.com/science/article/abs/pii/S0021967315009760"
				  textAlign="right"
				  lineHeight="1.2"
				>
				Journal of Chromatography A
				</A>
				<A target="_blank" href="JChrA2015.pdf">
				   <Icon name="download" color={violet}/>
				</A>
				  <H5 textAlign="right">2015, 1409, 1, DOI: 10.1016/j.chroma.2015.07.025</H5>
			</PCDIVQ_2>
			<PCDIVQ_3>
			</PCDIVQ_3>
			</PCDIVQ>
			</PCDIVInt1> 
	)
}