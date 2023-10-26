import {useState, useEffect} from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import {styles} from './CatchModalStylesheet'


export default function CatchModal({visible, setModalVisible}){

    const [dots, setDots] = useState(true)


   
    return (
        <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        >
            <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.7)'}}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <View style={styles.closeButton}>
                    <Text style={styles.closeText}>X</Text>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: 'black', padding: 20, borderRadius: 10, width: '50%',justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ color: 'white'}}>Adding catch...</Text>
                </View>
            </View>
        </Modal>
    )
}