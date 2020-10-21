import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';

import Download from '../../Backend/UI/Download/Download';
import WithTooltip from '../../UI/WithTooltip/WithTooltip';

export default ({ created_at, next_created_at, right, content, files = [], from = null }) => {
    const filesContent = files.filter(d => d).map(file => {
        const arr1 = file.split('.');
        const format = arr1[arr1.length - 1];

        const arr2 = file.split('/');
        const arr3 = arr2[arr2.length - 1].split('.');
        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');

        let icon;
        switch (format.toLowerCase()) {
            case 'pdf':
                icon = faFilePdf
                break;
            default:
                icon = faFileImage
                break;
        }

        return <div key={formatlessName + Math.random()} className={"d-inline-block " + (right ? "pl-2" : "pr-2")} style={{ maxWidth: 200 }}>
            <Download link={file} name={formatlessName + '.' + format}>
                <WithTooltip id={'attached-file-chat-' + moment(created_at).valueOf() + Math.round(Math.random() * 1000000000)} content={formatlessName + '.' + format}>
                    <div className="rounded-2 p-1 bg-light text-darkblue text-uppercase text-truncate text-nowrap">
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </WithTooltip>
            </Download>
        </div>
    });

    const stepLess = next_created_at && moment(next_created_at).valueOf() - moment(created_at).valueOf() > 300000;

    const text = <div className={"shadow-sm p-3 d-inline-block rounded " + (right ? "ml-auto bg-darkblue text-light" : "bg-white text-dark")} style={{ maxWidth: '70%' }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>;

    const main = <>
        <div className={right ? "text-right" : "text-left"}>
            {from ? <WithTooltip id={'tooltip-' + moment(created_at).valueOf() + Math.round(Math.random() * 1000000000)} content={<div className="text-left">
                <div>By: <span className="text-700">{from}</span></div>
                <div>On: <span className="text-700">{moment(created_at).format('LLL')}</span></div>
            </div>}>
                {text}
            </WithTooltip> : text}
        </div>

        <div className={"pt-2 " + (right && "text-right")}>
            {filesContent}
        </div>
        {(stepLess || !next_created_at)
            && <div className={"text-300 text-small text-border " + (right && "text-right")}>
                {moment(created_at).format('LLL')}
            </div>}
    </>;

    return <div className={stepLess ? "pb-3" : undefined}>
        {main}
    </div>;
};