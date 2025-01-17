import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { colors, fonts } from '../../styles';

import { RadioGroup, GridRow } from '../../common';


export default class ServicesScreen extends React.Component {
 

  _getRenderItemFunction = () =>
  
    [this.RenderRow,this.RenderRow, this.RenderRow, this.RenderRow][
      this.props.tabIndex
    ];

  _openArticle = article => {
    fetch(`${C.API}/users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"email":"sunil@webhopers.in", "password":"1122"}),
      })
      .then((response) => response.json())
      .then((responseJson) => { 
        tmpres = responseJson;
        console.warn(tmpres);
        // rs = tmpres.data;
        // for(i=0;i<rs.length;i++)
        // {
        //    var tmp = {};
        //    tmp.id = rs[i].id; //status also
        //    tmp.priority = rs[i].priority;
        //    tmp.product = rs[i].product.name;
        //    tmp.customerName = rs[i].customer.name;
        //    tmp.customerCity = rs[i].customer.city;
        //    tmp.customerState = rs[i].customer.state;
        //    new_service_data.push(tmp);
        // }
      })
      

    this.props.navigation.navigate({
      routeName: 'ServiceDetail',
      params: { 
        title: article.product,
        id: article.id,
        name: article.customerName,
        city: article.customerCity+' '+article.customerState,
        ...article },
    });
  };

  RenderRow = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemThreeContainer}
      onPress={() => this._openArticle(item)}
    >
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.itemThreeBrand}>{item.product}</Text>
            <View style={styles.itemThreeMetaContainer}>
              {item.priority && (
                <View
                  style={[
                    styles.badge,
                    item.priority === 'Normal' && { backgroundColor: colors.green },
                    item.priority === 'High' && { backgroundColor: colors.red },
                    item.priority === 'Low' && { backgroundColor: colors.yellow },
                  ]}
                >
                  <Text style={{ fontSize: 10, color: colors.white }} styleName="bright">{item.priority}</Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.itemThreeTitle}>{item.customerName}</Text> 
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}> {item.customerCity},{item.customerState}</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemThreeHr} />
    </TouchableOpacity>
  );

  render() {
    const groupedData =
      this.props.tabIndex === 0 ? this.props.new_services : this.props.tabIndex === 1 ? this.props.progresss_services : this.props.tabIndex === 2 ? this.props.pending_services : this.props.completed_services;

    return (
      
      <View style={styles.container}>
        <View style={{ height: 50 }}>
          <RadioGroup
            selectedIndex={this.props.tabIndex}
            items={this.props.tabs}
            onChange={this.props.setTabIndex}
            underline
          />
        </View>
        <FlatList
          keyExtractor={item =>
            item.id
              ? `${this.props.tabIndex}-${item.id}`
              : `${item[0] && item[0].id}`
          }
          style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
          data={groupedData}
          renderItem={this._getRenderItemFunction()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    flexDirection: 'row',
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
    justifyContent: 'flex-start',
    
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
   // marginRight: 25
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
