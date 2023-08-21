import HomeForthSection from "../../component/homeForthSection/homeForthSection"
import HomeSecondSection from "../../component/homeSecondSection/homeSecondSection"
import HomeThirdSection from "../../component/homeThirdSection/homeThirdSection"
import HomeTop from "../../component/homeTop/homePage"

function HomePage(){
    return(
        <>  
            <HomeTop></HomeTop>
            <HomeSecondSection></HomeSecondSection>
            <HomeThirdSection></HomeThirdSection>
            <HomeForthSection></HomeForthSection>
        </>
    )
}
export default HomePage