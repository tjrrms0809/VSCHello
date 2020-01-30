import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        //대량의 데이터
        this.state= {
            datas: [
                {name:"sam", message:"Hello world", img: require('./images/img01.jpg')},
                {name:"robin", message:"Hello RN", img: require('./images/img02.png')},
                {name:"hong", message:"Hello react", img: require('./images/img03.jpg')},
                {name:"kim", message:"Hello hybrid", img: require('./images/img04.jpg')},
                {name:"rosa", message:"Hello ios", img: require('./images/img05.jpg')},
                {name:"moana", message:"Hello tom", img: require('./images/img06.jpg')},
                {name:"jack", message:"Hello native", img: require('./images/img07.jpg')},
                {name:"merry", message:"Hello android", img: require('./images/img08.jpg')},
                {name:"lee", message:"Hello good", img: require('./images/img09.png')},
                {name:"rm", message:"Hello web", img: require('./images/img10.jpg')},
            ],
        };
    }

    render(){
        return (
            <ScrollView style={ style.container }>
                {/* 대량의 데이터 배열의 요소개수만큼 Component를 리턴하는 map()메소드 사용 */}
                {
                    this.state.datas.map( ( element, index)=>{
                        return (

                            // onpress 직접호출이 안되어 ()=>{this.clickItem(index); 대리호출 
                            <TouchableOpacity key={index} style={style.item} onPress={()=>{this.clickItem(index);}}> 
                                <Image source={ element.img } style={style.itemImg}></Image>
                                <View style={{flexDirection:"column"}}>
                                    <Text style={style.itemName}> { element.name} </Text>
                                    <Text style={style.itemMsg}> { element.message} </Text>
                                </View>                                
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        );
    }//render
    // 메소드를 호출하면서 파라미터로 클릭된 아이템의 인덱스 번호 받아야 함 
    clickItem=(index)=>{
        // 클릭한 아이템의 name 값??

        alert(this.state.datas[index].message);
    }

}//main

const style= StyleSheet.create( {
    container: {flex:1, padding:16},
    item:{
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 4,
        padding:8,
        marginBottom: 12,
    },
    itemImg:{
        width: 120,
        height: 100,
        resizeMode: 'cover',
        marginRight: 8,
    },
    itemName:{
        fontSize: 24,
        fontWeight: "bold",
    },
    itemMsg:{
        fontSize: 16,
        fontStyle:'italic'
    }
} );