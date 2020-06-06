import React, {Component} from 'react'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG/JPEG/GIF file!');
    }
    const isLt8M = file.size / 1024 / 1024 < 8;
    if (!isLt8M) {
        message.error('Image must smaller than 8MB!');
    }
    return isJpgOrPng && isLt8M;
}

class ImgUpload extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        loading: false,
        surface: ''
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
            if (info.file.response.code === 1) {
                this.props.updateSurface(info.file.response.data.surfaceUrl)
            }
        }
    };

    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload
                name="surface"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                method="POST"
                action="http://localhost:23333/article/articleSurfaceUpload"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        );
    }
}

export default ImgUpload