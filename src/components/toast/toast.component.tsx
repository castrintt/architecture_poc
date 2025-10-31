import AttentionSvg from '@assets/svg/attention';
import SuccessToastSvg from '@assets/svg/success';
import {
    useEffect,
    useRef
} from 'react';
import {
    Animated,
    Text,
    View
} from 'react-native';
import {Style} from './toast.styles';
import {ToastTypes} from './toast.types';
import {EToastTypes} from "../../../@domain/enum/toastTypes.enum";

export function ToastComponent({message, type, visible}: ToastTypes) {
    const widthAnim = useRef(new Animated.Value(0.9)).current;
    const renderTitleByType = () => {
        switch (type) {
            case EToastTypes.SUCCESS:
                return 'Sucesso!';
            case EToastTypes.ERROR:
                return 'Erro!';
            case EToastTypes.WARNING:
                return 'Atenção!';
            default:
                return 'Sucesso!';
        }
    };

    function renderIcon() {
        switch (type) {
            case EToastTypes.SUCCESS:
                return <SuccessToastSvg/>;
            case EToastTypes.ERROR:
                return <AttentionSvg/>;
            case EToastTypes.WARNING:
                return <AttentionSvg/>;
            default:
                return <AttentionSvg/>;
        }
    }


    useEffect(() => {
        if (visible) {
            widthAnim.setValue(0.9);
            Animated.timing(widthAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false
            }).start();
        }
    }, [message, type, widthAnim]);

    if (!visible) return null;

    return (
        <View style={Style(type).base} accessibilityLabel='toast-container'>
            <View style={Style(type).main}>
                <View style={Style(type).iconContainer}>
                    <View style={Style(type).wrappedIconContainer}>
                        {renderIcon()}
                    </View>
                </View>
                <View style={Style(type).textContainer}>
                    <Text style={Style(type).title} accessibilityLabel='toast-title'>{renderTitleByType()}</Text>
                    <Text style={Style(type).text} accessibilityLabel='toast-message'>{message}</Text>
                </View>
            </View>
            <Animated.View
                style={{
                    ...Style(type).empty,
                    width: widthAnim.interpolate({
                        inputRange: [0, 0.9],
                        outputRange: ['0%', '90%']
                    })
                }}
            />
        </View>
    );
}
