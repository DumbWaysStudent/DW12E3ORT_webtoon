import React, { Component } from 'react';
import { View, Image, Dimensions, FlatList } from 'react-native';

const widthImage = Dimensions.get('window').width
const heightImage = (Dimensions.get('window').height - 200)

const dataImages = [
    {
        id: 1,
        detailImage: "https://swebtoon-phinf.pstatic.net/20190628_291/1561712819083fTAdK_JPEG/15617128190541597182.jpg?type=q90"
    },
    {
        id: 2,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_167/1561712819108OAvb1_JPEG/15617128190781597182.jpg?type=q90'
    },
    {
        id: 3,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_33/1561712819109lx6Gn_JPEG/15617128190891597187.jpg?type=q90'
    },
    {
        id: 4,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_85/1561712819112zE3LQ_JPEG/15617128190971597185.jpg?type=q90'
    },
    {
        id: 5,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_6/15617128191166MK8Q_JPEG/15617128191011597183.jpg?type=q90'
    },
    {
        id: 6,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_42/1561712819337NUT8U_JPEG/15617128193191597188.jpg?type=q90'
    },
    {
        id: 7,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_141/1561712819360nWSdk_JPEG/15617128193421597186.jpg?type=q90'
    },
    {
        id: 8,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_245/15617128193607opKK_JPEG/15617128193471597183.jpg?type=q90'
    },
    {
        id: 9,
        detailImage: 'https://swebtoon-phinf.pstatic.net/20190628_10/1561712819454kw8Gi_JPEG/15617128194371597182.jpg?type=q90'
    }]

function Listener({ gambar }) {
    return (
        <View style={{ backgroundColor: '#82b2ff' }}>
            <Image style={{ width: widthImage, height: heightImage }} source={{ uri: gambar }} />
        </View>
    )
}

export default class DetailCartoon extends Component {

    forFlatList = () => {
        return (
            <View>
                <FlatList
                    data={dataImages}
                    renderItem={({ item }) =>
                        <Listener
                            gambar={item.detailImage}
                            titleId={item.id}
                        />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    render() {
        return (
            <View >
                {this.forFlatList()}
                {/* <Image style={{ width: 150, height: 100, borderWidth: 5 }} source={{ uri: 'https://swebtoon-phinf.pstatic.net/20190628_10/1561712819454kw8Gi_JPEG/15617128194371597182.jpg?type=q90' }} /> */}
            </View>
        )
    }
}
