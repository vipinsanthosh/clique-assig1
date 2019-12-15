
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, Alert, } from 'react-native';
import { Content, Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';


class OtpInputs extends React.Component{
    state={otp:[]};
    otpTextInput = [];

    componentDidMount() {
        this.otpTextInput[0]._root.focus();
    }

    renderInputs() {
        
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item>
                <Input
                    style={[styles.inputRadius]}
                    keyboardType="numeric"
                    maxLength = {1}
                    onChangeText={v => this.focusNext(j, v)}
                    onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => this.otpTextInput[j] = ref}
                />
            </Item></Col>
        );
        return txt;
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1]._root.focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
    }

    render() {
        return (
            
            <Content padder>
                
                <Text style={styles.text1}>Verify Phone Number</Text>
                <Text style={styles.text2}>Please enter the 4 digit SMS{"\n"}
                    verification code we sent to your{"\n"}mobile phone </Text>
                <Grid>
                    {this.renderInputs()}
                </Grid>
                <TouchableOpacity activeOpacity={0.5} 
                     onPress= {() =>{alert('OTP Re-sent')}}>
                    <Text style={styles.text3}>Resend OTP</Text></TouchableOpacity>
                <TouchableOpacity style={styles.arrow} activeOpacity={0.5} 
                     onPress={ () =>{this.props.navigation.navigate({routeName:'Page3'});}} >
                    <Image 
                        source={require('../assets/Arrow.png')}
                    />
                 </TouchableOpacity>

            </Content>
        );
    }


}


const styles = StyleSheet.create({
    text1: {
        marginTop: 150,
        fontWeight: "bold",
        fontSize: 18,
        textAlign:'center',

    
      },
    text2: {
        paddingTop: 7,
        color: '#7F7F7F',
        textAlign:'center',
        paddingBottom: 30,

      },
    
    text3: {
        color : 'orange',
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:70,
    },

    txtMargin: { 
        margin: 3,
    },

    inputRadius: {
         textAlign: 'center',
         backgroundColor: 'white',
         color: 'black',
         fontSize: 20,
         fontWeight: 'bold',
         width: 85, 
         height: 85, 
         borderRadius: 85/2,
         borderWidth: 5,
         borderColor: 'orange',
         
         
         
    },
    arrow:{
        alignItems: "center",
        marginTop: 90,
        
      },
});

export default OtpInputs;