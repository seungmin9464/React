import { useState } from 'react';
import { 
    SectionInner, 
    LeftDiv, 
    RightDiv, 
    H1, 
    Profile, 
    ProfileArea, 
    Programers,
    SkillWrap,
    SkillList,
    SkillInner,
} from './Style'
import skilldata from '../../asset/skilldata.json'

const SecondSection = ({ chanege, isDarkMode }) => {

    const [data, setData] = useState(skilldata)

    return (
        <SectionInner chanege={ chanege }>
            {/* 왼쪽 */}
            <LeftDiv chanege={ chanege }>
                <H1 chanege={ chanege }>ABOUT</H1>
                
                <Profile chanege={ chanege }>
                    <img src='./image/profile.jpg'/>
                </Profile>

                <ProfileArea chanege={ chanege }>
                    <p>안녕하세요.</p>
                    <p>평소 만들며 배우는걸 좋아했는데,&nbsp;</p>
                    <p>웹에도 관심이 생겨 배우게 되었습니다.&nbsp;</p>
                    <p>현재는 웹 프론트 분야를 공부하고 있습니다.&nbsp;</p>
                    <p>항상 배우고 노력하는 자세로 더 발전하는&nbsp;</p>
                    <p>개발자가 되겠습니다.</p>
                </ProfileArea>
                <Programers 
                    href='https://programmers.co.kr/pr/backseungmin92_6900' target='_blank'
                    chanege={ chanege }
                    >
                        <span>프로필 보기</span>
                </Programers>
            </LeftDiv>

            {/* 오른쪽 */}
            <RightDiv chanege={ chanege }>
                <H1 chanege={ chanege }>SKILL</H1>

                <SkillWrap chanege={ chanege }>
                    {
                        data.map(item => <SkillList 
                            key={item.id}
                            chanege={ chanege }>
                            <SkillInner chanege={ chanege }>
                                <div style={{ backgroundColor: isDarkMode ? item.background : item.lightBg}}>
                                    <img src={item.img}/>
                                </div>
                                <p>{item.title}</p>
                            </SkillInner>
                        </SkillList>)
                    }
                </SkillWrap>
            </RightDiv>
        </SectionInner>
    );
};

export default SecondSection;