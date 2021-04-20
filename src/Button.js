import { withStyles } from '@material-ui/core';
import MatButton from '@material-ui/core/Button';

export const Button = withStyles(() => {
    return {
        root: props => ({
            borderRadius: props.pill ? 50 : 4
        })
    }
})(MatButton);