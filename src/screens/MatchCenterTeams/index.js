import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MatchCenterHeader from '../../components/MatchCenterHeader';
import TeamSelector from '../../components/TeamSelector';
import PlayerList from '../../components/PlayerList';
import ImageSlide from '../../components/ImageSlide';
import CommentsList from '../../components/CommentsList';
import CommentInputArea from '../../components/CommentInputArea';
import BottomTabsMenu from '../../components/BottomTabsMenu';

import images from '../../constants/images';
// import layout from '../../themes/layout';
// import styles from './styles';

const commentsList = [
    {
        key: 0,
        avatar: images.commentsPersonJpg,
        name: 'John Doe',
        datetime: 'Aug 01, 2018 @ 20:12',
        like: true,
        likeNum: 24,
        post:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.',
    },
    {
        key: 1,
        avatar: images.commentsPersonJpg,
        name: 'John Doe',
        datetime: 'Aug 01, 2018 @ 20:12',
        like: false,
        likeNum: 36,
        post:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.',
    },
    {
        key: 2,
        avatar: images.commentsPersonJpg,
        name: 'John Doe',
        datetime: 'Aug 01, 2018 @ 20:12',
        like: true,
        likeNum: 9,
        post:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.',
    },
    {
        key: 3,
        avatar: images.commentsPersonJpg,
        name: 'John Doe',
        datetime: 'Aug 01, 2018 @ 20:12',
        like: false,
        likeNum: 2,
        post:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.',
    },
];

class MatchCenterScoreCardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBottomTab: 'MatchCenter',
            commentsList: commentsList,
            selectedTeam: 'KKR',
        };
    }

    onSelectBottomTab = value => {
        this.setState({selectedBottomTab: value});
    };

    onSelectLike = (key, like, likeNum) => {
        if (like == true) {
            this.state.commentsList[key].like = false;
            this.state.commentsList[key].likeNum = likeNum - 1;
        } else {
            this.state.commentsList[key].like = true;
            this.state.commentsList[key].likeNum = likeNum + 1;
        }
        this.forceUpdate();
    };

    changeSelectedTeam = value => {
        this.setState({selectedTeam: value});
    };

    onSelectPlayer = () => {
        this.props.navigation.navigate('PlayerProfile');
    };

    onSelectMatch = () => {
        this.props.navigation.navigate('MatchCenterScoreCard');
    };

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <MatchCenterHeader
                    navigation={this.props.navigation}
                    selectedTab="MatchCenterTeams"
                />
                <ScrollView style={{height: hp('45%')}}>
                    <View
                        style={{
                            paddingVertical: hp('2.0%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <TeamSelector
                            leftTeamName="KKR"
                            selectedBackgroundColor="#382b70"
                            leftTeamImage={require('../../assets/images/KKR.png')}
                            rightTeamName="CSK"
                            rightBackgroundColor="#fff"
                            rightTeamImage={require('../../assets/images/CSK.png')}
                            selectedTeam={this.state.selectedTeam}
                            changeSelectedTeam={value => this.changeSelectedTeam(value)}
                        />
                        <Text
                            style={{
                                marginTop: hp('2.0%'),
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                color: '#666',
                                fontSize: hp('2.0%'),
                                paddingVertical: hp('0.25%'),
                                paddingHorizontal: wp('2.0%'),
                                borderBottomColor: '#20d39b',
                                borderBottomWidth: 1,
                            }}>
                            PLAYING XI
                        </Text>
                        <PlayerList onSelectPlayer={() => this.onSelectPlayer()} />
                        <Text
                            style={{
                                marginTop: hp('2.0%'),
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                color: '#666',
                                fontSize: hp('2.0%'),
                                paddingVertical: hp('0.25%'),
                                paddingHorizontal: wp('2.0%'),
                                borderBottomColor: '#20d39b',
                                borderBottomWidth: 1,
                            }}>
                            NOT PLAYING
                        </Text>
                        <PlayerList onSelectPlayer={() => this.onSelectPlayer()} />
                        <Text
                            style={{
                                marginTop: hp('2.0%'),
                                marginBottom: hp('1.0%'),
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                color: '#666',
                                fontSize: hp('2.0%'),
                                paddingVertical: hp('0.25%'),
                                paddingHorizontal: wp('2.0%'),
                                borderBottomColor: '#20d39b',
                                borderBottomWidth: 1,
                            }}>
                            RECENT LEAGUES
                        </Text>
                        <ImageSlide
                            backgroundColor="#f0f0f0"
                            onSelectMatch={() => this.onSelectMatch()}
                        />
                        <Text
                            style={{
                                marginVertical: hp('1.0%'),
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                color: '#666',
                                fontSize: hp('2.0%'),
                                paddingVertical: hp('0.25%'),
                                paddingHorizontal: wp('2.0%'),
                                borderBottomColor: '#20d39b',
                                borderBottomWidth: 1,
                            }}>
                            COMMENTS
                        </Text>
                        <CommentsList
                            commentsList={this.state.commentsList}
                            onSelectLike={(key, like, likeNum) =>
                                this.onSelectLike(key, like, likeNum)
                            }
                        />
                        <CommentInputArea />
                    </View>
                </ScrollView>
                <BottomTabsMenu
                    navigation={this.props.navigation}
                    selectedTab={this.state.selectedBottomTab}
                    onSelectTab={value => this.onSelectBottomTab(value)}
                />
            </View>
        );
    }
}

export default MatchCenterScoreCardScreen;
