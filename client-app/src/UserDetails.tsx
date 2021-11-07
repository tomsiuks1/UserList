import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import { useStore } from "./stores/store"


export default observer(function UserDetails() {
    const {id} = useParams<{id: string}>();
    const {userStore} = useStore();
    const {loadUser, user} = userStore;

    useEffect(() => {
        if(id){
            loadUser(id);
        }
    }, [id, loadUser])

    return(
        <Table compact>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>User Id</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Body</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                        </Table.Cell>
                        <Table.Cell>{user?.id}</Table.Cell>
                        <Table.Cell>{user?.userId}</Table.Cell>
                        <Table.Cell>{user?.title}</Table.Cell>
                        <Table.Cell>{user?.body}</Table.Cell>
                    </Table.Row>
                
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                        <Button as={Link} to='/users'
                            floated='left'
                            size='small'
                            color='blue'
                        > Back to list
                        </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
})