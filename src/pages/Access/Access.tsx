import { Typography } from '@mui/material';
import * as React from 'react';
import img_map from './img/map.jpg'

function Access() {
    return (
        <div className="Interview">
            <Typography variant='h4'>アクセス</Typography>
            <img src={img_map} width={window.innerWidth * 0.8}></img>
            <Typography>
                大岡山駅から東工大の正門に入り、左の道路に入って5分ほど歩くと、セブンイレブンの真向かいに青い扉があります。
                この青い扉がMeisterの活動場所(倉庫)です。Meisterに興味のある方、質問のある方、是非見学に来て下さい！
            </Typography>
            <Typography>
            直接活動場所に来ても大丈夫ですが、部員がいないこともあるため、できるだけ事前に連絡先(
                  <a href="mailto:meisterwelcome2021@gmail.com">メール</a>、
                  <a href="https://twitter.com/Meister_2023">Twitter</a>、
                  <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">LINE</a>
                  のいずれか )まで連絡をしてください。
            </Typography>
        </div>
    )
}

export default Access
