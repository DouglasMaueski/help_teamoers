import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import Share from 'react-native-share';
import firestore from '@react-native-firebase/firestore';


export default function ListDoctorHome({ data, handleDeleteDoctor }) {


    const [modalVisibleEdit, setModalVisibleEdit] = useState(false)
    const [editingDoctor, setEditingDoctor] = useState({ ...data })


    const handleEditDoctor = () => {
        const updateData = {
            nome: editingDoctor.nome,
            crm: editingDoctor.crm,
            municipio: editingDoctor.municipio,
            areaAtuacao: editingDoctor.areaAtuacao,
            fazTMO: editingDoctor.fazTMO,
            aceitaSemSangue: editingDoctor.aceitaSemSangue,
            contato: editingDoctor.contato,
            email: editingDoctor.email,
            endereco: editingDoctor.endereco,
            observacoes: editingDoctor.observacoes,
        };
        firestore()
            .collection('doctors')
            .doc(data.id)
            .update(updateData)
            .then(() => {
                setModalVisibleEdit(false);
                Alert.alert("Sucesso", "Dados do médico atualizados com sucesso.");
            })
            .catch((error) => {
                console.log(error);
                Alert.alert("Erro", "Ocorreu um erro ao atualizar os dados do médico.");
            });
    };


    const handleAlertDelete = () => {
        Alert.alert(
            'Excluir Médico',
            `Tem certeza que deseja excluir o médico ${data.nome}?`,
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    onPress: () => handleDeleteDoctor(data.id)
                }
            ],
            { cancelable: false }
        )
    }


    return (
        <>
            <View style={data.fazTMO === 'Sim' ? (data.aceitaSemSangue === 'Sim' ? styles.containerGreen : styles.containerBlue) : styles.containerRed}>

                <Text style={styles.nome}>{data.nome}</Text>

                <View style={styles.content}>
                    <Text style={styles.areaAtuacao}>{data.areaAtuacao}</Text>

                    <View style={styles.contentFazTmo}>
                        <Text style={styles.textTmo}>Faz TMO:</Text>
                        <Text style={data.fazTMO === 'Sim' ? styles.textFazTmoSim : styles.textFazTmoNao}>{data.fazTMO}</Text>
                    </View>

                    <View style={styles.contentFazSemSangue}>
                        <Text style={styles.textTmo}>Faz TMO sem sangue:</Text>
                        <Text style={data.aceitaSemSangue === 'Sim' ? styles.textSemSangueSim : styles.textSemSangueNao}>
                            {data.aceitaSemSangue}</Text>
                    </View>

                    <View style={styles.icons}>
                        <TouchableOpacity onPress={handleAlertDelete}>
                            <MaterialIcons style={styles.iconToDelete} name="delete-forever" size={25} color="#dc2626" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setModalVisibleEdit(true) }}>
                            <MaterialIcons style={styles.iconToEdit} name="edit" size={25} color="#0077e6" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handlePressModalMain(data.id)}>
                            <MaterialIcons style={styles.iconToView} name="search" size={26} color="#14532d" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

           
            <Modal
                animationType="slide"
                visible={modalVisibleEdit}
                onRequestClose={() => setModalVisibleEdit(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitleEdit}>Editar informações</Text>
                    <ScrollView>
                        <KeyboardAvoidingView behavior='padding'>
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Nome"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.nome}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, nome: value })}
                                maxLength={70}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="CRM"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.crm}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, crm: value })}
                                maxLength={7}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Município"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.municipio}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, municipio: value })}
                                maxLength={50}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Área de atuação"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.areaAtuacao}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, areaAtuacao: value })}
                                maxLength={20}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Faz TMO"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.fazTMO}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, fazTMO: value })}
                                maxLength={3}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Aceita Sem Sangue"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.aceitaSemSangue}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, aceitaSemSangue: value })}
                                maxLength={3}
                            />
                            <TextInputMask
                                style={styles.modalInputEdit}
                                placeholder="Contato"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.contato}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, contato: value })}
                                keyboardType='numeric'
                                type={'cel-phone'}
                                maxLength={17}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(19) ',
                                }}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="E-mail"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.email}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, email: value })}
                                maxLength={50}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Endereço"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.endereco}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, endereco: value })}
                                multiline={true}
                                maxLength={120}
                            />
                            <TextInput
                                style={styles.modalInputEdit}
                                placeholder="Observações"
                                placeholderTextColor="#a8a29e"
                                value={editingDoctor.observacoes}
                                onChangeText={value => setEditingDoctor({ ...editingDoctor, observacoes: value })}
                                multiline={true}
                                numberOfLines={20}
                                height={200}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttonRed} onPress={() => setModalVisibleEdit(false)}>
                                    <Text style={styles.buttonText}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonBlue} onPress={handleEditDoctor}>
                                    <Text style={styles.buttonText}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        </>

    )
}

