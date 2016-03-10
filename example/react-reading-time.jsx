import React from 'react';
import ReactDOM from 'react-dom';
import ReadingTime from '../src/reading-time';

class ReactReadingTime extends React.Component {
    static propTypes = {
        wordsPerMinute: React.PropTypes.number
    };


    //for defaultproperties, you want to use default props 
    static defaultProps = {
        wordsPerMinute: 270
    };

    constructor(props) {
        super(props);

        this.state = {
            text: 'All Company electronic business equipment, including but not limited to Company-issued computer hardware and software, telephones, e-mail, voice mail, Internet and Intranet access, is provided to increase your efficiency and productivity by allowing you to obtain work-related data. These tools are Company property. Although the Company does not routinely or randomly exercise such rights, the Company does have, at all times, the legal right, as well as the occasional legal obligation, to monitor the use of such equipment and to review, inspect and disclose all material stored or produced, using Company-issued equipment. Therefore, all passwords, keys and other means necessary to access Company equipment and its contents must be available to the CompanyAlthough no employee has the right to access any other employees files or messages without the latter employees permission, understand that no communications or information accessed through or stored in any business equipment should be considered to be truly private or confidential. The Company reserves the right to monitor use as warranted. Note that even when an electronic or voice mail message or file is deleted/erased, it is still possible to retrieve/recreate it. You should also be aware that such material may become what is called “discoverable evidence” in litigation, meaning the Company could be required to preserve it and produce it in court.The Company strives to maintain a productive workplace free of harassment and is sensitive to the diversity of its employees. Therefore, the Company prohibits the use of computers, the e-mail system and other electronic information or telecommunication systems in ways that are disruptive, offensive to others, or harmful to morale. While the Company does not have any blanket prohibition on personal use of these electronic resources, we do expect employees to behave responsibly. No material inappropriate for the workplace should be accessed and both the Companys and others intellectual property rights should be respected. All general workplace rules apply, including, without limitation, prohibitions on harassing use, creation of a hostile work environment, or showing disrespect for others. The Company does not permit mass distributions by employees of non-business material through these systems because of the limited capacity and capabilities of the equipment and the potentially disruptive nature of such communications.You are also asked to take appropriate measures to secure confidential, privileged, proprietary, or sensitive information and trade secrets when sending this type of information via e-mail. Messages should be routed only to those with a legitimate need to know and they should have appropriate marking that such messages are privileged, confidential, and proprietary or contain sensitive information, and if necessary, the transmissions should also be encrypted.'
        };
    }

    updateText(ev) {
        this.setState({ text: ev.target.value });
    }

    render () {
        return (
            <div className='container' style={{ marginTop: '50px' }}>
                <div className='col-lg-8 col-lg-offset-2 form-group'>
        <textarea
            value={this.state.text}
            onChange={::this.updateText}
            className='form-control'
            style={{ height: '500px', resize: 'none' }}>
        </textarea>
                </div>
                <ReadingTime text={this.state.text} className='col-lg-2 well' />
            </div>
        );
    }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));