import React from 'react'
import { HeaderParagraphtwo, HeaderImage, HeaderSection, HeaderSecond, HeaderHeading, HeaderHeadingt, HeaderParagraph, HeaderButton, HeaderButtont, HeaderSectiontwo , Social, SocialHeading, SocialParagraph } from '../style'

function Header() {
    return (
        <>
            <HeaderSection>
                <HeaderImage></HeaderImage>
                <HeaderSecond>
                    <HeaderHeading>BECOME A SOCIAL MEDIA <br />EXPERT</HeaderHeading>
                    <HeaderParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus? Quibusdam explicabo quisquam dicta, fuga dolorum error totam velit aut nulla! Corporis at dolorum quis libero aspernatur quidem debitis perferendis.</HeaderParagraph>
                    <HeaderButton>Our Traning</HeaderButton>
                    <HeaderButtont>Register <br /> Now</HeaderButtont>
                </HeaderSecond>
            </HeaderSection>
            <HeaderSectiontwo>
                <HeaderHeadingt>ABOUT OUR COMPANY</HeaderHeadingt>
                <HeaderParagraphtwo>The safety of agricultural products has always been a matter of great concern to people. To address this concern, many blockchain-based agricultural product traceability systems (BAPTSs) have been constructed. The implementation of such systems necessitates the selection of an appropriate design scheme. However, due to the diversity of agricultural products and the uncertainty of the environment, selecting an adequate design scheme for BAPTS is a difficult task for decision-makers. Because the q-rung orthopair fuzzy (q-ROF) set can dynamically delineate the space of uncertain information, this paper proposes a decision algorithm for selecting a design scheme for BAPTS using the q-ROF set. Herein, we first combine the Muirhead mean operator and power operator to develop the q-ROF power Muirhead Mean (q-ROFPMM) operator and the q-ROF weighted power Muirhead Mean (q-ROFWPMM) operator. Then, we investigate several properties of the proposed operators. Further, we construct a novel multicriteria decision-making framework for evaluating and selecting the design scheme for BAPTS based on the q-ROFWPMM operator. Next, a case study on BAPTS selection is presented to validate our method. Finally, the results of sensitivity and comparative analyses are provided to verify the efficiency and accuracy of our method. The results show that our method can effectively address the issues of BAPTS evaluation and selection, capture the relationships between any number of criteria, and eliminate the negative effects of abnormal expert evaluation values on decision-making results.</HeaderParagraphtwo>
            </HeaderSectiontwo>
            <Social>
            <SocialHeading>"SOCIAL MEDIA EXPERT"</SocialHeading>
            <SocialParagraph>SORTED BY: Usama Rajpoot</SocialParagraph>
            </Social>
        </>
    )
}

export default Header