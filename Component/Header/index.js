import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

// CONSTANT
import color from '../../Constant/color';
import {responsiveHeight} from '../../Constant/responsive';

const index = ({
  props,
  title,
  onBack,
  withAction = false,
  actionIcon,
  action,
}) => {
  return (
    <SafeAreaView>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.BackAction
          color="white"
          size={responsiveHeight(24)}
          onPress={() => props.navigation.goBack()}
        />
        <Appbar.Content titleStyle={styles.titleStyle} title={title} />
        {withAction ? (
          <Appbar.Action color="white" icon={actionIcon} onPress={action} />
        ) : null}
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: color.primary_blue,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: responsiveHeight(12),
  },
  titleStyle: {
    color: 'white',
    alignSelf: 'flex-start',
    fontFamily: 'Lato-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    fontSize: responsiveHeight(24),
  },
});
