import {Theme, useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Transport} from "../../Types.ts";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(id: number, selectedIds: number[] | number, theme: Theme) {
    const selectedArray = Array.isArray(selectedIds) ? selectedIds : [selectedIds];
    return {
        fontWeight: selectedArray.indexOf(id) === -1 || !id
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectTransport({transports, selectedTransports, onChange}: {
    transports: Transport[] | undefined;
    selectedTransports: number;
    onChange: (selectedIds: number | string) => void;
}) {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<number>) => {
        const {
            target: { value },
        } = event;
        onChange(value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel sx={{ color: 'white' }} id="demo-multiple-name-label">Type</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={selectedTransports}
                    onChange={handleChange}
                    input={<OutlinedInput label="Type" />}
                    MenuProps={MenuProps}
                    sx={{ color: 'white' }}
                >
                    {transports && transports?.map((transport: Transport) => (
                        <MenuItem
                            key={transport.id}
                            value={transport.id}
                            style={{ color: 'black', ...getStyles(transport.id, selectedTransports, theme) }}
                        >
                            {transport.type || 'Unknown Type'}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
