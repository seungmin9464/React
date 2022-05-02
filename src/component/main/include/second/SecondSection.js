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
} from './style'
import { useState } from 'react';
import skilldata from '../../asset/skilldata.json'

const SecondSection = ({ theme }) => {

    const [data, setData] = useState(skilldata)

    return (
        <SectionInner theme={ theme }>
            {/* 왼쪽 */}
            <LeftDiv theme={ theme }>
                <H1>ABOUT</H1>
                
                <Profile theme={ theme }>
                    <img src='./image/profile.jpg'/>
                </Profile>

                <ProfileArea theme={ theme }>
                    <p>안녕하세요.</p>
                    <p>평소 만들며 배우는걸 좋아했는데,&nbsp;</p>
                    <p>웹에도 관심이 생겨 배우게 되었습니다.&nbsp;</p>
                    <p>현재는 웹 프론트 분야를 공부하고 있습니다.&nbsp;</p>
                    <p>항상 배우고 노력하는 자세로 더 발전하는&nbsp;</p>
                    <p>개발자가 되겠습니다.</p>
                </ProfileArea>
                <Programers 
                    href='https://programmers.co.kr/pr/backseungmin92_6900' target='_blank'
                    theme={ theme }
                    >
                        <span>프로필 보기</span>
                </Programers>
            </LeftDiv>

            {/* 오른쪽 */}
            <RightDiv theme={ theme }>
                <H1>SKILL</H1>

                <SkillWrap>
                    {
                        data.map(item => <SkillList 
                            key={item.id}
                            theme={ theme }>
                            <SkillInner theme={ theme }>
                                <div style={{ backgroundColor: item.background}}>
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