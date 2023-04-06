import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerRed: {
        flex: 1,
        marginBottom: 1,
        marginTop: 8,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 6,
        borderLeftWidth: 7,
        borderLeftColor: 'red'
    },
    containerBlue: {
        flex: 1,
        marginBottom: 1,
        marginTop: 8,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 6,
        borderLeftWidth: 7,
        borderLeftColor: 'blue'
    },
    containerGreen: {
        flex: 1,
        marginBottom: 1,
        marginTop: 8,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 6,
        borderLeftWidth: 7,
        borderLeftColor: 'green'
    },
    content: {
        flexDirection: "column",
        marginStart: 5,
    },
    nome: {
        fontSize: 17,
        fontWeight: 'bold',
        marginStart: 5,
        color: '#000',
    },
    areaAtuacao: {
        fontSize: 16,
        marginBottom: 6,
        color: '#000',
    },
    contentFazTmo: {
        flexDirection: 'row',
    },
    contentFazSemSangue:{
        flexDirection: 'row'
    },
    textTmo: {
        fontSize: 16,
        marginEnd: 5,
        color: '#000',
    },
    textFazTmoSim: {
        color: '#15803d',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textFazTmoNao: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textSemSangueSim: {
        color: '#15803d',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textSemSangueNao: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icons: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    iconToDelete: {
        marginEnd: '5%',
    },
    iconToEdit: {
        marginEnd: '5%',
    },
    iconToView: {
        marginEnd: '5%',
    },
    modalIconsWhatsApp: {
        marginTop: 30,
        marginEnd: 30,
        alignItems: 'flex-end'
    },   
    modalTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf:'center',
        marginTop: 5,
        color: '#000',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    modalNome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    modalAreaAtuacao: {
        fontSize: 17,
        marginBottom: 10,
        marginLeft: 10,
        color: '#000',
    },
    modalText: {
        fontSize: 17,
        marginBottom: 3,
        marginLeft: 10,
        color: '#000',
    },
    modalTextObs: {
        fontSize: 17,
        marginLeft: 10,
        color: '#000',
    },
    buttonModalFechar: {
        backgroundColor: '#0e7490',
        padding: 13,
        borderRadius: 6,
        marginTop: 20,
        alignItems: 'center',
        width: '80%',
        marginBottom: '5%',
        alignSelf: 'center'        
    },
    buttonModalFecharText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalContainerWhats: {
        width: '90%', 
        height: '75%', 
        alignSelf: 'center', 
        backgroundColor: '#0e7490', 
        alignContent: 'center', 
        borderRadius: 20, 
        elevation: 5,
        paddingLeft: 10,
    },
    modalContainerMainWhats: {
        flex: 1, 
        justifyContent: 'center'
    },
    modalTitleWhats: {
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf:'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#fff',
    },
    modalContentWhats: {
        flex: 1,
        padding: 10,
        color: '#fff',
    },
    buttonModalFecharWhats: {
        backgroundColor: 'red',
        padding: 13,
        borderRadius: 6,
        alignItems: 'center',
        width: '35%',
        alignSelf: 'center'        
    },
    buttonModalEnviarWhats: {
        backgroundColor: '#064e3b',
        padding: 13,
        borderRadius: 6,
        alignItems: 'center',
        width: '35%',
        alignSelf: 'center'    

    },
    buttonModalFecharTextWhats: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalNomeWhats: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    modalTextWhats: {
        fontSize: 17,
        marginBottom: 3,
        marginLeft: 10,
        color: '#fff',
    },
    modalTextObsWhats: {
        fontSize: 17,
        marginBottom: 10,
        marginLeft: 10,
        color: '#fff',    
    },
    containerbuttons: {        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 19,
    },


    modalView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: '100%',
    },
    modalTitleEdit: {
        color: '#808080',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        paddingTop: 10,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    modalInputEdit: {
        height: 42,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 2,
        paddingHorizontal: 10,
        marginTop: 10,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: 10,
    },
    buttonRed: {
        marginTop: 30,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginLeft: 10,
        marginBottom: 60,
        marginEnd: 20,
        borderRadius: 5,
        backgroundColor: 'red',
    },
    buttonBlue: {
        marginTop: 30,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginLeft: 10,
        marginBottom: 60,
        marginEnd: 20,
        borderRadius: 5,
        backgroundColor: '#0077e6',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})

