import React from 'react';
<<<<<<< HEAD
import ExpBlock from './ExpBlock';
import InterestBlock from './InterestBlock';
import SkillBarBlock from './SkillBarBlock';
import SkillPieBlock from './SkillPieBlock';

class Resume extends React.Component {
    render() {
        const expBlocks = this.props.expBlocks.map((expBlock) =>
            <ExpBlock expBlock={expBlock} />
        );
        const skillBarBlock = <SkillBarBlock skillBarBlock={this.props.skillBarBlock} />;
        const skillPieBlock = <SkillPieBlock skillPieBlock={this.props.skillPieBlock} />;
        const interestBlock = <InterestBlock interestBlock={this.props.interestBlock}/>;
=======
// import ExpBlock from './ExpBlock';
// import SkillBarBlock from './SkillBarBlock';
// import SkillPieBlock from './SkillPieBlock';


class Resume extends React.Component {
    render() {
        // const expBlocks = this.props.expBlocks.map((expBlock) =>
        //     <SkillBlock className={expBlock.className} name={expBlock.name} faIcon={expBlock.faIcon} >
        //         <ExpList experience={expBlock.experience} />
        //     </SkillBlock>
        // );
        // const skillBarBlock = (
        //     <SkillBlock className={this.props.skillBarBlock.className} name={this.props.skillBarBlock.name} faIcon={this.props.skillBarBlock.faIcon} >
        //         {
        //             this.props.skillBarBlock.skillBars.map((skillBar) =>
        //                 <SkillBar percent={skillBar.percent} name={skillBar.name} />
        //             )
        //         }
        //     </SkillBlock>
        // );
        // const skillPieBlock = (
        //     <SkillBlock className={this.props.skillPieBlock.className} name={this.props.skillPieBlock.name} faIcon={this.props.skillPieBlock.faIcon} >
        //         {
        //             this.props.skillPieBlock.skillPies.map((skillPie) =>
        //                 <SkillPie percent={skillPie.percent} name={skillPie.name} />
        //             )
        //         }
        //     </SkillBlock>
        // );
>>>>>>> 5a51ded3b014fc1882289664f2aa22292d5dde01

        return (
            <div className="resume">
                <div className="base">
                </div>
                <div className="func">
<<<<<<< HEAD
                    {expBlocks}
                    {skillBarBlock}
                    {skillPieBlock}
                    {interestBlock}
=======
                    {this.props.children}
>>>>>>> 5a51ded3b014fc1882289664f2aa22292d5dde01
                </div>
            </div>
        );
    }
}

export default Resume;